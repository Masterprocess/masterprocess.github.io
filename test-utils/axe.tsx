import { axe as jestAxe } from 'jest-axe';
import type { RunOptions } from 'axe-core';
import { expect, test } from 'vitest';
import { render } from './render';
import type { ReactElement } from 'react';

type AxeInput = ReactElement | ReactElement[];

export function axe(nodes: AxeInput, options?: RunOptions) {
  const elements = Array.isArray(nodes) ? nodes : [nodes];
  const runAxe = jestAxe as (
    container: Element | Document,
    runOptions?: RunOptions
  ) => Promise<{ violations: unknown[] }>;

  test('has no accessibility violations', async () => {
    const { container, unmount } = render(<>{elements}</>);
    const results = await runAxe(container, options);
    expect(results.violations).toHaveLength(0);
    unmount();
  });
}
