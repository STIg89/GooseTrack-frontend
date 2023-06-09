import HashLoader from 'react-spinners/HashLoader';

import { LoaderWrapper } from './loader.styled';

export function Loader() {
  return (
    <LoaderWrapper>
      <HashLoader
        color="var(--accent-background-color)"
        size={50}
        speedMultiplier={1}
        cssOverride={{
          margin: '0 auto',
        }}
      />
    </LoaderWrapper>
  );
}
