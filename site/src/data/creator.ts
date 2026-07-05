import { createHash } from 'node:crypto';

const personalEmail = 'jay.cincotta@gmail.com'.trim().toLowerCase();
const gravatarHash = createHash('md5').update(personalEmail).digest('hex');

export const creatorProfile = {
  name: 'Jay Cincotta',
  gravatarUrl: `https://www.gravatar.com/avatar/${gravatarHash}?s=80&d=identicon`,
  personalPhotoLabel: 'Trip photo by Jay Cincotta',
};