"use client";

import type { toggleAll } from "../actions";

export function ToggleAll({ toggleAllAction }: ToggleAllProps) {
  const handleOnChange = () => {
    toggleAllAction();
  };

  return (
    <div className="toggle-all-container">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleOnChange}
      />
      <label htmlFor="toggle-all" className="toggle-all-label">
        Toggle All Input
      </label>
    </div>
  );
}

interface ToggleAllProps {
  toggleAllAction: typeof toggleAll;
}
