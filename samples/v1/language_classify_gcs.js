// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// DO NOT EDIT! This is a generated sample ("Request",  "language_classify_gcs")

// sample-metadata:
//   title: Classify Content (GCS)
//   description: Classifying Content in text file stored in Cloud Storage
//   usage: node samples/v1/language_classify_gcs.js [--gcs_content_uri "gs://cloud-samples-data/language/classify-entertainment.txt"]

'use strict';

// [START language_classify_gcs]

const {LanguageServiceClient} = require('@google-cloud/language').v1;

/**
 * Classifying Content in text file stored in Cloud Storage
 *
 * @param gcsContentUri {string} Google Cloud Storage URI where the file content is located.
 * e.g. gs://[Your Bucket]/[Path to File]
 * The text file must include at least 20 words.
 */
function sampleClassifyText(gcsContentUri) {
  const client = new LanguageServiceClient();
  // const gcsContentUri = 'gs://cloud-samples-data/language/classify-entertainment.txt';

  // Available types: PLAIN_TEXT, HTML
  const type = 'PLAIN_TEXT';

  // Optional. If not specified, the language is automatically detected.
  // For list of supported languages:
  // https://cloud.google.com/natural-language/docs/languages
  const language = 'en';
  const document = {
    gcsContentUri: gcsContentUri,
    type: type,
    language: language,
  };
  client
    .classifyText({document: document})
    .then(responses => {
      const response = responses[0];
      // Loop through classified categories returned from the API
      for (const category of response.categories) {
        // Get the name of the category representing the document.
        // See the predefined taxonomy of categories:
        // https://cloud.google.com/natural-language/docs/categories
        console.log(`Category name: ${category.name}`);
        // Get the confidence. Number representing how certain the classifier
        // is that this category represents the provided text.
        console.log(`Confidence: ${category.confidence}`);
      }
    })
    .catch(err => {
      console.error(err);
    });
}

// [END language_classify_gcs]
// tslint:disable-next-line:no-any

const argv = require(`yargs`).option('gcs_content_uri', {
  default: 'gs://cloud-samples-data/language/classify-entertainment.txt',
  string: true,
}).argv;

sampleClassifyText(argv.gcs_content_uri);
