'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNative = require('react-native');
var app = require('@firebase/app');
var enum_maps = require('./enum_maps-81db3ff6.js');
var tslib = require('tslib');
require('@firebase/util');
require('@firebase/component');
require('@firebase/logger');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a persistence class that wraps AsyncStorage imported from
 * `react-native` or `@react-native-community/async-storage`.
 *
 * Creates a "new"-able subclass on the fly that has an empty constructor.
 *
 * In the _getInstance() implementation (see src/core/persistence/index.ts),
 * we expect each "externs.Persistence" object passed to us by the user to
 * be able to be instantiated (as a class) using "new". That function also
 * expects the constructor to be empty. Since ReactNativeStorage requires the
 * underlying storage layer, we need to be able to create subclasses
 * (closures, esentially) that have the storage layer but empty constructor.
 */
function getReactNativePersistence(storage) {
    var _a;
    return _a = /** @class */ (function () {
            function class_1() {
                this.type = "LOCAL" /* LOCAL */;
            }
            class_1.prototype._isAvailable = function () {
                return tslib.__awaiter(this, void 0, void 0, function () {
                    return tslib.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 3, , 4]);
                                if (!storage) {
                                    return [2 /*return*/, false];
                                }
                                return [4 /*yield*/, storage.setItem(enum_maps.STORAGE_AVAILABLE_KEY, '1')];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, storage.removeItem(enum_maps.STORAGE_AVAILABLE_KEY)];
                            case 2:
                                _b.sent();
                                return [2 /*return*/, true];
                            case 3:
                                _b.sent();
                                return [2 /*return*/, false];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            class_1.prototype._set = function (key, value) {
                return storage.setItem(key, JSON.stringify(value));
            };
            class_1.prototype._get = function (key) {
                return tslib.__awaiter(this, void 0, void 0, function () {
                    var json;
                    return tslib.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, storage.getItem(key)];
                            case 1:
                                json = _a.sent();
                                return [2 /*return*/, json ? JSON.parse(json) : null];
                        }
                    });
                });
            };
            class_1.prototype._remove = function (key) {
                return storage.removeItem(key);
            };
            class_1.prototype._addListener = function (_key, _listener) {
                // Listeners are not supported for React Native storage.
                return;
            };
            class_1.prototype._removeListener = function (_key, _listener) {
                // Listeners are not supported for React Native storage.
                return;
            };
            return class_1;
        }()),
        _a.type = 'LOCAL',
        _a;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An implementation of {@link Persistence} of type 'LOCAL' for use in React
 * Native environments.
 *
 * @public
 */
var reactNativeLocalPersistence = getReactNativePersistence(reactNative.AsyncStorage);
function getAuth(app$1) {
    if (app$1 === void 0) { app$1 = app.getApp(); }
    var provider = app._getProvider(app$1, 'auth');
    if (provider.isInitialized()) {
        return provider.getImmediate();
    }
    return enum_maps.initializeAuth(app$1, {
        persistence: reactNativeLocalPersistence
    });
}
enum_maps.registerAuth("ReactNative" /* REACT_NATIVE */);

exports.ActionCodeOperation = enum_maps.ActionCodeOperation;
exports.ActionCodeURL = enum_maps.ActionCodeURL;
exports.AuthCredential = enum_maps.AuthCredential;
exports.AuthErrorCodes = enum_maps.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
exports.EmailAuthCredential = enum_maps.EmailAuthCredential;
exports.EmailAuthProvider = enum_maps.EmailAuthProvider;
exports.FacebookAuthProvider = enum_maps.FacebookAuthProvider;
exports.FactorId = enum_maps.FactorId;
exports.GithubAuthProvider = enum_maps.GithubAuthProvider;
exports.GoogleAuthProvider = enum_maps.GoogleAuthProvider;
exports.OAuthCredential = enum_maps.OAuthCredential;
exports.OAuthProvider = enum_maps.OAuthProvider;
exports.OperationType = enum_maps.OperationType;
exports.PhoneAuthCredential = enum_maps.PhoneAuthCredential;
exports.ProviderId = enum_maps.ProviderId;
exports.SAMLAuthProvider = enum_maps.SAMLAuthProvider;
exports.SignInMethod = enum_maps.SignInMethod;
exports.TwitterAuthProvider = enum_maps.TwitterAuthProvider;
exports.applyActionCode = enum_maps.applyActionCode;
exports.checkActionCode = enum_maps.checkActionCode;
exports.confirmPasswordReset = enum_maps.confirmPasswordReset;
exports.connectAuthEmulator = enum_maps.connectAuthEmulator;
exports.createUserWithEmailAndPassword = enum_maps.createUserWithEmailAndPassword;
exports.debugErrorMap = enum_maps.debugErrorMap;
exports.deleteUser = enum_maps.deleteUser;
exports.fetchSignInMethodsForEmail = enum_maps.fetchSignInMethodsForEmail;
exports.getAdditionalUserInfo = enum_maps.getAdditionalUserInfo;
exports.getIdToken = enum_maps.getIdToken;
exports.getIdTokenResult = enum_maps.getIdTokenResult;
exports.getMultiFactorResolver = enum_maps.getMultiFactorResolver;
exports.inMemoryPersistence = enum_maps.inMemoryPersistence;
exports.initializeAuth = enum_maps.initializeAuth;
exports.isSignInWithEmailLink = enum_maps.isSignInWithEmailLink;
exports.linkWithCredential = enum_maps.linkWithCredential;
exports.multiFactor = enum_maps.multiFactor;
exports.onAuthStateChanged = enum_maps.onAuthStateChanged;
exports.onIdTokenChanged = enum_maps.onIdTokenChanged;
exports.parseActionCodeURL = enum_maps.parseActionCodeURL;
exports.prodErrorMap = enum_maps.prodErrorMap;
exports.reauthenticateWithCredential = enum_maps.reauthenticateWithCredential;
exports.reload = enum_maps.reload;
exports.sendEmailVerification = enum_maps.sendEmailVerification;
exports.sendPasswordResetEmail = enum_maps.sendPasswordResetEmail;
exports.sendSignInLinkToEmail = enum_maps.sendSignInLinkToEmail;
exports.setPersistence = enum_maps.setPersistence;
exports.signInAnonymously = enum_maps.signInAnonymously;
exports.signInWithCredential = enum_maps.signInWithCredential;
exports.signInWithCustomToken = enum_maps.signInWithCustomToken;
exports.signInWithEmailAndPassword = enum_maps.signInWithEmailAndPassword;
exports.signInWithEmailLink = enum_maps.signInWithEmailLink;
exports.signOut = enum_maps.signOut;
exports.unlink = enum_maps.unlink;
exports.updateCurrentUser = enum_maps.updateCurrentUser;
exports.updateEmail = enum_maps.updateEmail;
exports.updatePassword = enum_maps.updatePassword;
exports.updateProfile = enum_maps.updateProfile;
exports.useDeviceLanguage = enum_maps.useDeviceLanguage;
exports.verifyBeforeUpdateEmail = enum_maps.verifyBeforeUpdateEmail;
exports.verifyPasswordResetCode = enum_maps.verifyPasswordResetCode;
exports.getAuth = getAuth;
exports.reactNativeLocalPersistence = reactNativeLocalPersistence;
//# sourceMappingURL=index.js.map