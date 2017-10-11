/**
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/*!
 * DO NOT REMOVE THE FOLLOWING NAMESPACE DEFINITIONS
 */
/**
 * @namespace google
 * @private
 */
/**
 * @namespace google.cloud
 * @private
 */
/**
 * @namespace google.cloud.language.v1
 */
/**
 * @namespace google.cloud.language.v1beta2
 */

const VERSION = require('../package.json').version;

// Import the clients for each version supported by this package.
var gapic = {
  v1: require('./v1'),
  v1beta2: require('./v1beta2'),
};

/**
 * The `@google-cloud/language` package has three named exports:
 *
 * - `LanguageServiceClient` - Reference to {@link v1.LanguageServiceClient}.
 * - `v1` - Object with the following properties:
 *   - `LanguageServiceClient` - Reference to {@link v1.LanguageServiceClient}.
 * - `v1beta2` - Object with the following properties:
 *   - `LanguageServiceClient` - Reference to {@link v1beta2.LanguageServiceClient}.
 *
 * See {@link v1.LanguageServiceClient} for client options and methods.
 *
 * @module {v1.LanguageServiceClient} @google-cloud/language
 * @alias nodejs-language
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/language
 *
 * @example <caption>Import the client library</caption>
 * const LanguageServiceClient = require('@google-cloud/language').LanguageServiceClient;
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * const language = new LanguageServiceClient();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * const language = new LanguageServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:language_quickstart
 * Full quickstart example:
 */

/**
 * Reference to {@link v1.LanguageServiceClient}.
 *
 * @name module:@google-cloud/language.LanguageServiceClient
 * @type {constructor}
 */
module.exports = gapic.v1;

/**
 * @type {object}
 * @property {constructor} LanguageServiceClient Reference to {@link v1.LanguageServiceClient}.
 */
module.exports.v1 = gapic.v1;

/**
 * @type {object}
 * @property {constructor} LanguageServiceClient Reference to {@link v1beta2.LanguageServiceClient}.
 */
module.exports.v1beta2 = gapic.v1beta2;
module.exports.default = Object.assign({}, module.exports);
