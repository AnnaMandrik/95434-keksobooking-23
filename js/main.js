
import {rentalAnnouncement} from './data.js';

const SIMILAR_ANNOUNCMENT_COUNT = 10;

const similarAnnouncment = new Array(SIMILAR_ANNOUNCMENT_COUNT).fill(null).map(() => rentalAnnouncement());

similarAnnouncment;
