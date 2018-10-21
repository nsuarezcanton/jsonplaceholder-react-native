/* eslint-disable import/prefer-default-export */
import request from './request';

export function getAlbums() {
  return request({
    endpoint: 'albums',
  });
}
