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

// DO NOT EDIT! This is a generated sample ("Request",  "language_sentiment_text")

// sample-metadata:
//   title: Analyzing Sentiment
//   description: Analyzing Sentiment in a String
//   usage: node samples/v1/language_sentiment_text.js [--text_content "I am so happy and joyful."]

'use strict';

function main(textContent = 'I am so happy and joyful.') {
  // [START language_sentiment_text]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const textContent = 'I am so happy and joyful.';

  // Imports the client library
  const {LanguageServiceClient} = require('@google-cloud/language').v1;

  // Instantiates a client
  const languageServiceClient = new LanguageServiceClient();

  async function sampleAnalyzeSentiment() {
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

    // Available values: NONE, UTF8, UTF16, UTF32
    const encodingType = 'UTF8';

    // Construct request
    const request = {
      document: document,
      encodingType: encodingType,
    };

    // Run request
    const [response] = await languageServiceClient.analyzeSentiment(request);

    // Get overall sentiment of the input document
    console.log(
      `Document sentiment score: ${response.documentSentiment.score}`
    );
    console.log(
      `Document sentiment magnitude: ${response.documentSentiment.magnitude}`
    );
    // Get sentiment for all sentences in the document
    for (const sentence of response.sentences) {
      console.log(`Sentence text: ${sentence.text.content}`);
      console.log(`Sentence sentiment score: ${sentence.sentiment.score}`);
      console.log(
        `Sentence sentiment magnitude: ${sentence.sentiment.magnitude}`
      );
    }
    // Get the language of the text, which will be the same as
    // the language specified in the request or, if not specified,
    // the automatically-detected language.
    console.log(`Language of the text: ${response.language}`);
  }
  sampleAnalyzeSentiment();
  // [END language_sentiment_text]
}

const argv = require(`yargs`).option('text_content', {
  default: 'I am so happy and joyful.',
  string: true,
}).argv;

main(argv.text_content);
