"use client";
import { useState } from "react";

export default function Page() {
  const [valueOne, setValueOne] = useState<number | "">("");
  const [valueTwo, setValueTwo] = useState<number | "">("");
  const [total, setTotal] = useState<number | undefined>(undefined);

  const getTotal = () => {
    setTotal((Number(valueOne) || 0) + (Number(valueTwo) || 0));
  };

  return (
    <>
      <div className="calculator">
        <input
          className="text-fields"
          min={0}
          placeholder="Enter value one"
          type="number"
          name="number1"
          id="number1"
          value={valueOne}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValueOne(Number(e.target.value || 0));
          }}
        />
        <input
          className="text-fields"
          min={0}
          placeholder="Enter value two"
          type="number"
          name="number2"
          id="number2"
          value={valueTwo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValueTwo(Number(e.target.value || 0));
          }}
        />

        <button
          className="submit-button"
          onClick={() => {
            getTotal();
          }}
        >
          Add two numbers
        </button>

        {total !== undefined && <p>Total: {total}</p>}
      </div>
    </>
  );
}
