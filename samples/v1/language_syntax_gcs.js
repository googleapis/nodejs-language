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

// DO NOT EDIT! This is a generated sample ("Request",  "language_syntax_gcs")

// sample-metadata:
//   title: Analyzing Syntax (GCS)
//   description: Analyzing Syntax in text file stored in Cloud Storage
//   usage: node samples/v1/language_syntax_gcs.js [--gcs_content_uri "gs://cloud-samples-data/language/syntax-sentence.txt"]

'use strict';

function main(
  gcsContentUri = 'gs://cloud-samples-data/language/syntax-sentence.txt'
) {
  // [START language_syntax_gcs]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const gcsContentUri = 'gs://cloud-samples-data/language/syntax-sentence.txt';

  // Imports the client library
  const {LanguageServiceClient} = require('@google-cloud/language').v1;

  // Instantiates a client
  const languageServiceClient = new LanguageServiceClient();

  async function sampleAnalyzeSyntax() {
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

    // Available values: NONE, UTF8, UTF16, UTF32
    const encodingType = 'UTF8';

    // Construct request
    const request = {
      document: document,
      encodingType: encodingType,
    };

    // Run request
    const [response] = await languageServiceClient.analyzeSyntax(request);

    // Loop through tokens returned from the API
    for (const token of response.tokens) {
      // Get the text content of this token. Usually a word or punctuation.
      const text = token.text;
      console.log(`Token text: ${text.content}`);
      console.log(
        `Location of this token in overall document: ${text.beginOffset}`
      );
      // Get the part of speech information for this token.
      // Parts of spech are as defined in:
      // http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
      const partOfSpeech = token.partOfSpeech;
      // Get the tag, e.g. NOUN, ADJ for Adjective, et al.
      console.log(`Part of Speech tag: ${partOfSpeech.tag}`);
      // Get the voice, e.g. ACTIVE or PASSIVE
      console.log(`Voice: ${partOfSpeech.voice}`);
      // Get the tense, e.g. PAST, FUTURE, PRESENT, et al.
      console.log(`Tense: ${partOfSpeech.tense}`);
      // See API reference for additional Part of Speech information available
      // Get the lemma of the token. Wikipedia lemma description
      // https://en.wikipedia.org/wiki/Lemma_(morphology)
      console.log(`Lemma: ${token.lemma}`);
      // Get the dependency tree parse information for this token.
      // For more information on dependency labels:
      // http://www.aclweb.org/anthology/P13-2017
      const dependencyEdge = token.dependencyEdge;
      console.log(`Head token index: ${dependencyEdge.headTokenIndex}`);
      console.log(`Label: ${dependencyEdge.label}`);
    }
    // Get the language of the text, which will be the same as
    // the language specified in the request or, if not specified,
    // the automatically-detected language.
    console.log(`Language of the text: ${response.language}`);
  }
  sampleAnalyzeSyntax();
  // [END language_syntax_gcs]
}

const argv = require(`yargs`).option('gcs_content_uri', {
  default: 'gs://cloud-samples-data/language/syntax-sentence.txt',
  string: true,
}).argv;

main(argv.gcs_content_uri);
