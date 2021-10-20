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
import { Persistence, ReactNativeAsyncStorage } from '../../model/public_types';
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
export declare function getReactNativePersistence(storage: ReactNativeAsyncStorage): Persistence;
