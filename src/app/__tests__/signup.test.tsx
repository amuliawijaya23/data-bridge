import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SignUp from '@app/(authentication)/signup/page';

afterEach(cleanup);

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('SignUp', () => {
  it('renders without crashing', () => {
    render(<SignUp />);
  });
});
