/*

SPDX-FileCopyrightText: © 2023 Dai Foundation <www.daifoundation.org>

SPDX-License-Identifier: AGPL-3.0-or-later

*/

import { Button, Flex, Text } from 'theme-ui';
import { Delegate, DelegateInfo, DelegatePaginated } from '../../types';
import { formatValue } from 'lib/string';
import EtherscanLink from 'modules/web3/components/EtherscanLink';
import { useNetwork } from 'modules/app/hooks/useNetwork';

type Props = {
  skyToDeposit: bigint;
  delegate: Delegate | DelegatePaginated | DelegateInfo;
  onClick: () => void;
  disabled: boolean;
  onBack: () => void;
  prepareError?: Error | null;
};

export const ConfirmContent = ({
  skyToDeposit,
  delegate,
  onClick,
  disabled,
  onBack,
  prepareError
}: Props): JSX.Element => {
  const { address, voteDelegateAddress } = delegate;
  const network = useNetwork();

  return (
    <Flex sx={{ flexDirection: 'column', textAlign: 'center' }}>
      <Text variant="microHeading" sx={{ fontSize: [3, 6] }}>
        Confirm Transaction
      </Text>
      <Text sx={{ mt: 4 }}>
        You are delegating{' '}
        <Text sx={{ fontWeight: 'bold', display: 'inline' }}>{formatValue(skyToDeposit, 'wad', 6)} SKY</Text>{' '}
        to delegate contract{' '}
        <EtherscanLink
          type="address"
          showAddress
          hash={voteDelegateAddress}
          network={network}
          styles={{ justifyContent: 'center' }}
        />
      </Text>
      <Text sx={{ color: 'secondaryEmphasis', mt: 4 }}>
        This delegate contract was created by{' '}
        <EtherscanLink
          type="address"
          showAddress
          hash={address}
          network={network}
          styles={{ justifyContent: 'center' }}
        />
      </Text>
      <Button onClick={onClick} disabled={disabled} sx={{ mt: 4 }}>
        Confirm Transaction
      </Button>
      <Button onClick={onBack} variant="textual" sx={{ color: 'secondary', fontSize: 2, mt: 1 }}>
        Back
      </Button>
      {prepareError && (
        <Text variant="smallText" sx={{ color: 'error', mt: 3 }}>
          Something went wrong preparing the transaction. Please try again or contact support if the issue
          persists.
        </Text>
      )}
    </Flex>
  );
};
