/**
 * Subpath imports only — if the library regressed to a mega-barrel, this bundle would explode.
 * Keep imports as separate modules under dist/ (relative from fixture dir).
 */
import { AddBold } from '../../dist/bold/AddBold.js';
import { AddOutline } from '../../dist/outline/AddOutline.js';
import { AddBulk } from '../../dist/bulk/AddBulk.js';
import { AddBroken } from '../../dist/broken/AddBroken.js';
import { HomeBold } from '../../dist/bold/HomeBold.js';
import { HomeOutline } from '../../dist/outline/HomeOutline.js';
import { SearchNormalBold } from '../../dist/bold/SearchNormalBold.js';
import { Setting2Outline } from '../../dist/outline/Setting2Outline.js';
import { HeartBulk } from '../../dist/bulk/HeartBulk.js';
import { CalendarBroken } from '../../dist/broken/CalendarBroken.js';

export const icons = [
  AddBold,
  AddOutline,
  AddBulk,
  AddBroken,
  HomeBold,
  HomeOutline,
  SearchNormalBold,
  Setting2Outline,
  HeartBulk,
  CalendarBroken,
];
