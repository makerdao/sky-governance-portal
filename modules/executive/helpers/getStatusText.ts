/*

SPDX-FileCopyrightText: © 2023 Dai Foundation <www.daifoundation.org>

SPDX-License-Identifier: AGPL-3.0-or-later

*/

import { isBefore } from 'date-fns';
import { formatDateWithTime } from 'lib/datetime';
import { formatValue } from 'lib/string';
import { SpellData } from '../types/spellData';
import { ZERO_ADDRESS } from 'modules/web3/constants/addresses';

const SPELL_SCHEDULED_DATE_OVERRIDES = {
  '0xB70fB4eE900650DCaE5dD63Fd06E07F0b3a45d13': 'December 7, 2020, 14:00 UTC'
};

export const getStatusText = ({
  proposalAddress,
  spellData,
  skyOnHat
}: {
  proposalAddress: string;
  spellData?: SpellData;
  skyOnHat?: bigint;
}): string => {
  if (!spellData) return 'Fetching status...';

  if (proposalAddress === ZERO_ADDRESS) {
    return 'This proposal has surpassed the threshold — the new chief has been activated!';
  }

  // check if scheduled or has been executed
  if (spellData.hasBeenScheduled || spellData.dateExecuted) {
    if (spellData.dateExecuted !== undefined && spellData.dateExecuted !== null) {
      return `Passed on ${formatDateWithTime(spellData.datePassed)}. Executed on ${formatDateWithTime(
        spellData.dateExecuted
      )}.`;
    } else {
      return `Passed on ${formatDateWithTime(spellData.datePassed)}. Available for execution on
      ${
        SPELL_SCHEDULED_DATE_OVERRIDES[proposalAddress] ||
        formatDateWithTime(spellData.nextCastTime || spellData.eta)
      }.`;
    }
  }

  // hasn't been passed or executed, check if expired
  const isExpired = spellData.expiration ? isBefore(new Date(spellData.expiration), new Date()) : false;
  if (isExpired) {
    return `This proposal expired at ${formatDateWithTime(
      spellData.expiration
    )} and can no longer be executed.`;
  }

  // not expired, passed, or executed, check support level
  if (!!spellData.skySupport && !!skyOnHat) {
    // If the new proposal has more SKY than the old proposal, but hasn't been lifted, display 0 SKY needed to pass.
    const skyNeeded =
      Number(skyOnHat) - Number(spellData.skySupport) > 0
        ? Number(skyOnHat) - Number(spellData.skySupport)
        : 0;

    return `${formatValue(
      BigInt(Math.ceil(skyNeeded))
    )} additional SKY support needed to pass. Expires at ${formatDateWithTime(spellData.expiration)}.`;
  }

  // hasn't been scheduled, executed, hasn't expired, must be active and not passed yet
  return 'This proposal has not yet passed and is not available for execution.';
};
