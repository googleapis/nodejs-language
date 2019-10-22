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

// DO NOT EDIT! This is a generated sample ("Request",  "language_entities_text")

// sample-metadata:
//   title: Analyzing Entities
//   description: Analyzing Entities in a String
//   usage: node samples/v1/language_entities_text.js [--text_content "California is a state."]

'use strict';

// [START language_entities_text]

const {LanguageServiceClient} = require('@google-cloud/language').v1;

/**
 * Analyzing Entities in a String
 *
 * @param textContent {string} The text content to analyze
 */
function sampleAnalyzeEntities(textContent) {
  const client = new LanguageServiceClient();
  // const textContent = 'California is a state.';

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
  const request = {
    document: document,
    encodingType: encodingType,
  };
  client
    .analyzeEntities(request)
    .then(responses => {
      const response = responses[0];
      // Loop through entitites returned from the API
      for (const entity of response.entities) {
        console.log(`Representative name for the entity: ${entity.name}`);
        // Get entity type, e.g. PERSON, LOCATION, ADDRESS, NUMBER, et al
        console.log(`Entity type: ${entity.type}`);
        // Get the salience score associated with the entity in the [0, 1.0] range
        console.log(`Salience score: ${entity.salience}`);
        // Loop over the metadata associated with entity. For many known entities,
        // the metadata is a Wikipedia URL (wikipedia_url) and Knowledge Graph MID (mid).
        // Some entity types may have additional metadata, e.g. ADDRESS entities
        // may have metadata for the address street_name, postal_code, et al.
        for (const [metadataName, metadataValue] of Object.entries(
          entity.metadata
        )) {
          console.log(`${metadataName}: ${metadataValue}`);
        }

        // Loop over the mentions of this entity in the input document.
        // The API currently supports proper noun mentions.
        for (const mention of entity.mentions) {
          console.log(`Mention text: ${mention.text.content}`);
          // Get the mention type, e.g. PROPER for proper noun
          console.log(`Mention type: ${mention.type}`);
        }
      }
      // Get the language of the text, which will be the same as
      // the language specified in the request or, if not specified,
      // the automatically-detected language.
      console.log(`Language of the text: ${response.language}`);
    })
    .catch(err => {
      console.error(err);
    });
}

// [END language_entities_text]
// tslint:disable-next-line:no-any

const argv = require(`yargs`).option('text_content', {
  default: 'California is a state.',
  string: true,
}).argv;

sampleAnalyzeEntities(argv.text_content);
