/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

window.z = window.z || {};
window.z.entity = z.entity || {};

window.z.entity.Asset = class Asset {
  constructor(id) {
    this.id = id;
    this.key = '';
    this.type = '';
  }

  is_image() {
    return this.type === z.assets.AssetType.IMAGE;
  }

  is_text() {
    return this.type === z.assets.AssetType.TEXT;
  }

  is_file() {
    return this.type === z.assets.AssetType.FILE && !this.is_video() && !this.is_audio();
  }

  is_location() {
    return this.type === z.assets.AssetType.LOCATION;
  }

  is_video() {
    const is_video_asset = (this.type === z.assets.AssetType.FILE) && (this.file_type != null ? this.file_type.startsWith('video') : undefined);
    if (is_video_asset) {
      const can_play = document.createElement('video').canPlayType(this.file_type);
      if (can_play !== '') {
        return true;
      }
    }
    return false;
  }

  is_audio() {
    if ((this.type === z.assets.AssetType.FILE) && (this.file_type != null ? this.file_type.startsWith('audio') : undefined)) {
      const can_play = document.createElement('audio').canPlayType(this.file_type);
      if (can_play !== '') {
        return true;
      }
    }
    return false;
  }
};
