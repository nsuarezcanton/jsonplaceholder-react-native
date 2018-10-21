/* eslint-disable import/prefer-default-export */
import request from './request';

export function getPhotos() {
  return request({
    endpoint: 'photos',
  });
}
