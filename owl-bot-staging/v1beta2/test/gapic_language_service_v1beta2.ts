// Copyright 2022 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as languageserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta2.LanguageServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = languageserviceModule.v1beta2.LanguageServiceClient.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = languageserviceModule.v1beta2.LanguageServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = languageserviceModule.v1beta2.LanguageServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new languageserviceModule.v1beta2.LanguageServiceClient();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new languageserviceModule.v1beta2.LanguageServiceClient({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.languageServiceStub, undefined);
        await client.initialize();
        assert(client.languageServiceStub);
    });

    it('has close method for the initialized client', done => {
        const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.initialize();
        assert(client.languageServiceStub);
        client.close().then(() => {
            done();
        });
    });

    it('has close method for the non-initialized client', done => {
        const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.languageServiceStub, undefined);
        client.close().then(() => {
            done();
        });
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('analyzeSentiment', () => {
        it('invokes analyzeSentiment without error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSentimentRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSentimentResponse());
            client.innerApiCalls.analyzeSentiment = stubSimpleCall(expectedResponse);
            const [response] = await client.analyzeSentiment(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeSentiment as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeSentiment without error using callback', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSentimentRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSentimentResponse());
            client.innerApiCalls.analyzeSentiment = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.analyzeSentiment(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.language.v1beta2.IAnalyzeSentimentResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeSentiment as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes analyzeSentiment with error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSentimentRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.analyzeSentiment = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.analyzeSentiment(request), expectedError);
            assert((client.innerApiCalls.analyzeSentiment as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeSentiment with closed client', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSentimentRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.analyzeSentiment(request), expectedError);
        });
    });

    describe('analyzeEntities', () => {
        it('invokes analyzeEntities without error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitiesRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitiesResponse());
            client.innerApiCalls.analyzeEntities = stubSimpleCall(expectedResponse);
            const [response] = await client.analyzeEntities(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeEntities as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeEntities without error using callback', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitiesRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitiesResponse());
            client.innerApiCalls.analyzeEntities = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.analyzeEntities(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.language.v1beta2.IAnalyzeEntitiesResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeEntities as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes analyzeEntities with error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitiesRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.analyzeEntities = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.analyzeEntities(request), expectedError);
            assert((client.innerApiCalls.analyzeEntities as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeEntities with closed client', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitiesRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.analyzeEntities(request), expectedError);
        });
    });

    describe('analyzeEntitySentiment', () => {
        it('invokes analyzeEntitySentiment without error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse());
            client.innerApiCalls.analyzeEntitySentiment = stubSimpleCall(expectedResponse);
            const [response] = await client.analyzeEntitySentiment(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeEntitySentiment as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeEntitySentiment without error using callback', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse());
            client.innerApiCalls.analyzeEntitySentiment = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.analyzeEntitySentiment(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.language.v1beta2.IAnalyzeEntitySentimentResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeEntitySentiment as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes analyzeEntitySentiment with error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.analyzeEntitySentiment = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.analyzeEntitySentiment(request), expectedError);
            assert((client.innerApiCalls.analyzeEntitySentiment as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeEntitySentiment with closed client', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.analyzeEntitySentiment(request), expectedError);
        });
    });

    describe('analyzeSyntax', () => {
        it('invokes analyzeSyntax without error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSyntaxRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSyntaxResponse());
            client.innerApiCalls.analyzeSyntax = stubSimpleCall(expectedResponse);
            const [response] = await client.analyzeSyntax(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeSyntax as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeSyntax without error using callback', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSyntaxRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSyntaxResponse());
            client.innerApiCalls.analyzeSyntax = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.analyzeSyntax(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.language.v1beta2.IAnalyzeSyntaxResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.analyzeSyntax as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes analyzeSyntax with error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSyntaxRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.analyzeSyntax = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.analyzeSyntax(request), expectedError);
            assert((client.innerApiCalls.analyzeSyntax as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes analyzeSyntax with closed client', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnalyzeSyntaxRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.analyzeSyntax(request), expectedError);
        });
    });

    describe('classifyText', () => {
        it('invokes classifyText without error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.ClassifyTextRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.ClassifyTextResponse());
            client.innerApiCalls.classifyText = stubSimpleCall(expectedResponse);
            const [response] = await client.classifyText(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.classifyText as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes classifyText without error using callback', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.ClassifyTextRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.ClassifyTextResponse());
            client.innerApiCalls.classifyText = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.classifyText(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.language.v1beta2.IClassifyTextResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.classifyText as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes classifyText with error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.ClassifyTextRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.classifyText = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.classifyText(request), expectedError);
            assert((client.innerApiCalls.classifyText as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes classifyText with closed client', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.ClassifyTextRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.classifyText(request), expectedError);
        });
    });

    describe('annotateText', () => {
        it('invokes annotateText without error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnnotateTextRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnnotateTextResponse());
            client.innerApiCalls.annotateText = stubSimpleCall(expectedResponse);
            const [response] = await client.annotateText(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.annotateText as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes annotateText without error using callback', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnnotateTextRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnnotateTextResponse());
            client.innerApiCalls.annotateText = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.annotateText(
                    request,
                    (err?: Error|null, result?: protos.google.cloud.language.v1beta2.IAnnotateTextResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.annotateText as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes annotateText with error', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnnotateTextRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.annotateText = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.annotateText(request), expectedError);
            assert((client.innerApiCalls.annotateText as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes annotateText with closed client', async () => {
            const client = new languageserviceModule.v1beta2.LanguageServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.cloud.language.v1beta2.AnnotateTextRequest());
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.annotateText(request), expectedError);
        });
    });
});
