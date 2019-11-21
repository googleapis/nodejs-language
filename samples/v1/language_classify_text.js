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

// DO NOT EDIT! This is a generated sample ("Request",  "language_classify_text")

// sample-metadata:
//   title: Classify Content
//   description: Classifying Content in a String
//   usage: node samples/v1/language_classify_text.js [--text_content "That actor on TV makes movies in Hollywood and also stars in a variety of popular new TV shows."]

'use strict';

function main(
  textContent = 'That actor on TV makes movies in Hollywood and also stars in a variety of popular new TV shows.'
) {
  // [START language_classify_text]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const textContent = 'That actor on TV makes movies in Hollywood and also stars in a variety of popular new TV shows.';

  // Imports the client library
  const {LanguageServiceClient} = require('@google-cloud/language').v1;

  // Instantiates a client
  const languageServiceClient = new LanguageServiceClient();

  async function sampleClassifyText() {
    // Available types: PLAIN_TEXT, HTML
    const type = 'PLAIN_TEXT';

    // Optional. If not specified, the language is automatically detected.
    // For list of supported languages:
    // https://cloud.google.com/natural-language/docs/languages
    const language = 'en';
    const document = {
      content: textContent,
      type: type,
      language: language,
    };

    // Run request
    const [response] = await languageServiceClient.classifyText({
      document: document,
    });

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
  }
  sampleClassifyText();
  // [END language_classify_text]
}

const argv = require(`yargs`).option('text_content', {
  default:
    'That actor on TV makes movies in Hollywood and also stars in a variety of popular new TV shows.',
  string: true,
}).argv;

main(argv.text_content);
