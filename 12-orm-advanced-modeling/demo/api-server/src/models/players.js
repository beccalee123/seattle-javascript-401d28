'use strict';

import Model from './model.js';
import schema from './mongo/players.js';

class Players extends Model {}

const players = new Players(schema);

export default players;
