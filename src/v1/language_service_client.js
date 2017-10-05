/*
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
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1/language_service.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */

'use strict';

const gax = require('google-gax');
const path = require('path');

const gapicConfig = require('./language_service_client_config');
const types = require('./types');

/**
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * @class
 */
class LanguageServiceClient {
  constructor(opts) {
    // Ensure that options include the service address and port.
    opts = Object.assign({
      clientConfig: {},
      port: this.port,
      servicePath: this.servicePath,
    }, opts);

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    Object.assign(opts, {scopes: this.scopes});
    this._gaxGrpc = gax.grpc(opts);

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version.node}`,
      `grpc/${this._gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${this.version}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Put together the default options sent with requests.
    var defaults = this._gaxGrpc.constructSettings(
      'google.cloud.language.v1.LanguageService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')},
    );

    // Put together a "service stub".
    var languageServiceStub = this._gaxGrpc.createStub(
      types.LanguageService,
      opts
    );

    // Iterate over each of the methods that the service provides and
    // provide a private API call method for it.
    this._apiCalls = {};
    var languageServiceStubMethods = [
      'analyzeSentiment',
      'analyzeEntities',
      'analyzeEntitySentiment',
      'analyzeSyntax',
      'annotateText',
    ];
    for (let methodName of languageServiceStubMethods) {
      this._apiCalls[methodName] = gax.createApiCall(
        languageServiceStub.then(stub => function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return stub[methodName].apply(stub, args);
        }),
        defaults[methodName],
        null
      );
    }
  }

  /**
   * The service address for this API.
   */
  static get servicePath() {
    return 'language.googleapis.com';
  }

  /**
   * The service port for this API.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
    ];
  }
}


/**
 * Get the project ID used by this class.
 * @param {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
LanguageServiceClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Analyzes the sentiment of the provided text.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 * @param {number=} request.encodingType
 *   The encoding type used by the API to calculate sentence offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [AnalyzeSentimentResponse]{@link AnalyzeSentimentResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AnalyzeSentimentResponse]{@link AnalyzeSentimentResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var language = require('@google-cloud/language');
 *
 * var client = language.v1({
 *   // optional auth parameters.
 * });
 *
 * var document = {};
 * client.analyzeSentiment({document: document}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
LanguageServiceClient.prototype.analyzeSentiment = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._apiCalls.analyzeSentiment(request, options, callback);
};

/**
 * Finds named entities (currently proper names and common nouns) in the text
 * along with entity types, salience, mentions for each entity, and
 * other properties.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 * @param {number=} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [AnalyzeEntitiesResponse]{@link AnalyzeEntitiesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AnalyzeEntitiesResponse]{@link AnalyzeEntitiesResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var language = require('@google-cloud/language');
 *
 * var client = language.v1({
 *   // optional auth parameters.
 * });
 *
 * var document = {};
 * client.analyzeEntities({document: document}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
LanguageServiceClient.prototype.analyzeEntities = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._apiCalls.analyzeEntities(request, options, callback);
};

/**
 * Finds entities, similar to {@link AnalyzeEntities} in the text and analyzes
 * sentiment associated with each entity and its mentions.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 * @param {number=} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [AnalyzeEntitySentimentResponse]{@link AnalyzeEntitySentimentResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AnalyzeEntitySentimentResponse]{@link AnalyzeEntitySentimentResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var language = require('@google-cloud/language');
 *
 * var client = language.v1({
 *   // optional auth parameters.
 * });
 *
 * var document = {};
 * client.analyzeEntitySentiment({document: document}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
LanguageServiceClient.prototype.analyzeEntitySentiment = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._apiCalls.analyzeEntitySentiment(request, options, callback);
};

/**
 * Analyzes the syntax of the text and provides sentence boundaries and
 * tokenization along with part of speech tags, dependency trees, and other
 * properties.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 * @param {number=} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [AnalyzeSyntaxResponse]{@link AnalyzeSyntaxResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AnalyzeSyntaxResponse]{@link AnalyzeSyntaxResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var language = require('@google-cloud/language');
 *
 * var client = language.v1({
 *   // optional auth parameters.
 * });
 *
 * var document = {};
 * client.analyzeSyntax({document: document}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
LanguageServiceClient.prototype.analyzeSyntax = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._apiCalls.analyzeSyntax(request, options, callback);
};

/**
 * A convenience method that provides all the features that analyzeSentiment,
 * analyzeEntities, and analyzeSyntax provide in one call.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 * @param {Object} request.features
 *   The enabled features.
 *
 *   This object should have the same structure as [Features]{@link Features}
 * @param {number=} request.encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [AnnotateTextResponse]{@link AnnotateTextResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [AnnotateTextResponse]{@link AnnotateTextResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var language = require('@google-cloud/language');
 *
 * var client = language.v1({
 *   // optional auth parameters.
 * });
 *
 * var document = {};
 * var features = {};
 * var request = {
 *     document: document,
 *     features: features
 * };
 * client.annotateText(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
LanguageServiceClient.prototype.annotateText = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._apiCalls.annotateText(request, options, callback);
};

function LanguageServiceClientBuilder(gaxGrpc) {
  if (!(this instanceof LanguageServiceClientBuilder)) {
    return new LanguageServiceClientBuilder(gaxGrpc);
  }

  var languageServiceStubProtos = gaxGrpc.loadProto(
    path.join(__dirname, '..', '..', 'protos', 'google/cloud/language/v1/language_service.proto'));
  Object.assign(this, languageServiceStubProtos.google.cloud.language.v1);


  /**
   * Build a new instance of {@link LanguageServiceClient}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   */
  this.languageServiceClient = function(opts) {
    return new LanguageServiceClient(gaxGrpc, languageServiceStubProtos, opts);
  };
  Object.assign(this.languageServiceClient, LanguageServiceClient);
}
module.exports = LanguageServiceClientBuilder;
module.exports.SERVICE_ADDRESS = LanguageServiceClient.serviceAddress;
module.exports.ALL_SCOPES = LanguageServiceClient.scopes;
