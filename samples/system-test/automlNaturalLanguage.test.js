/**
 * Copyright 2018, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);

const cmdDataset = `node ./automl/automlNaturalLanguageDataset.js`;
const cmdModel = `node ./automl/automlNaturalLanguageModel.js`;
const cmdPredict = `node ./automl/automlNaturalLanguagePredict.js`;

const testDataSetName = `testDataSet`;
const dummyDataSet = `dummyDataSet`;
const testModelName = `dummyModel`;
const sampleText = `./automl/resources/test.txt`;

//skipped because it's been taking too long to delete datasets
test.skip(`It should create a create, list, and delete a dataset`, async t => {
  // Check to see that this dataset does not yet exist
  let output = await tools.runAsync(`${cmdDataset} listDatasets`);
  t.false(output.includes(testDataSetName));

  // Create dataset
  output = await tools.runAsync(
    `${cmdDataset} createDataset -n "${testDataSetName}"`
  );
  const parsedOut = output.split(`\n`);
  const dataSetName = parsedOut[0].split(`:`)[1].trim();
  const dataSetId = parsedOut[1].split(`:`)[1].trim();
  const dataSetDisplayName = parsedOut[2].split(`:`)[1].trim();
  t.true(output.includes(`Dataset display name:  ${testDataSetName}`));

  console.log(`dataSetName: ${dataSetName}`);
  console.log(`dataSetId: ${dataSetId}`);
  console.log(`dataSetDisplayName: ${dataSetDisplayName}`);

  // delete dataset
  output = await tools.runAsync(
    `${cmdDataset} deleteDataset -i "${dataSetId}"`
  );
  t.true(output.includes(`Dataset deleted.`));
});

// see : https://github.com/GoogleCloudPlatform/python-docs-samples/blob/master/NaturalLanguage/automl/model_test.py
// we make too models running this test, see hard-coded workaround below
test.skip(`It should create a dataset, import data, and start making a model`, async t => {
  // Check to see that this dataset does not yet exist
  let output = await tools.runAsync(`${cmdDataset} listDatasets`);
  t.false(output.includes(dummyDataSet));

  // Create dataset
  output = await tools.runAsync(
    `${cmdDataset} createDataset -n "${dummyDataSet}"`
  );
  const parsedOut = output.split(`\n`);
  const dataSetName = parsedOut[0].split(`:`)[1].trim();
  const dataSetId = parsedOut[1].split(`:`)[1].trim();
  const dataSetDisplayName = parsedOut[2].split(`:`)[1].trim();
  t.true(output.includes(`Dataset display name:  ${dummyDataSet}`));

  console.log(`dataSetName: ${dataSetName}`);
  console.log(`dataSetId: ${dataSetId}`);
  console.log(`dataSetDisplayName: ${dataSetDisplayName}`);

  // Import Data
  output = await tools.runAsync(
    `${cmdDataset} importData -i "${dataSetId}" -p "gs://nodejs-docs-samples-vcm/happiness.csv"`
  );
  t.true(output.includes(`Data imported.`));

  // Check to make sure model doesn't already exist
  output = await tools.runAsync(`${cmdModel} listModels`);
  t.false(output.includes(`${testModelName}`));

  // begin training dataset, getting operation ID for next operation
  output = await tools.runAsync(
    `${cmdModel} createModel -i "${dataSetId}" -m "${testModelName}" -t "2"`
  );
  const operationName = output
    .split(`\n`)[0]
    .split(`:`)[1]
    .trim();
  t.true(output.includes(`Training started...`));

  // poll operation status, here confirming that operation is not complete yet
  output = await tools.runAsync(
    `${cmdModel} getOperationStatus -i "${dataSetId}" -o "${operationName}"`
  );
  t.true(output.includes(`done: false`));

  // delete dataset
  // output = await tools.runAsync(`${cmdDataset} deleteDataset -i "${dataSetId}"`);
  // t.true(output.includes(`Dataset deleted.`));
});

test(`It should display evaluation from prexisting model`, async t => {
  const displayName = `dummyDb`;
  const donotdeleteModelId = `TCN4740161257642267869`;

  //confirm dataset exists
  let output = await tools.runAsync(`${cmdDataset} listDatasets`);
  t.true(output.includes(displayName));

  // list model evaluations, confirm model exists
  output = await tools.runAsync(
    `${cmdModel} listModelEvaluations -a "${donotdeleteModelId}"`
  );

  //display evaluation
  output = await tools.runAsync(
    `${cmdModel} displayEvaluation -a "${donotdeleteModelId}"`
  );
  t.true(output.includes(`Model Precision:`));
});

test(`It should run Prediction from prexisting model`, async t => {
  const displayName = `do_not_delete_me`;
  const donotdeleteModelId = `TCN4740161257642267869`;

  //confirm dataset exists
  let output = await tools.runAsync(`${cmdDataset} listDatasets`);
  t.true(output.includes(displayName));

  // list model evaluations, confirm model exists
  output = await tools.runAsync(
    `${cmdModel} listModelEvaluations -a "${donotdeleteModelId}"`
  );
  t.true(output.includes(`classificationEvaluationMetrics:`));

  // run prediction on 'test.txt' in resources folder
  output = await tools.runAsync(
    `${cmdPredict} predict -i "${donotdeleteModelId}" -f "${sampleText}" -s "0.5"`
  );
  t.true(output.includes(`Firm_Cheese`));
});

// list datasets
test(`should list datasets`, async t => {
  const output = await tools.runAsync(`${cmdDataset} listDatasets`);
  t.true(output.includes(`List of datasets:`));
});
