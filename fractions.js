import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Grid,
} from "@mui/material";

import "./FractionCalculator.css";
import "../fraction.css";
import "./mixednumbers";
import MixedNumberCalculator from "./mixednumbers";
import FractionSimplifyCalculator from "./simplifyfraction";
import BigFractionCalculator from "./bignumberfraction";
import DecimalToFractionCalculator from "./decimaltofraction";

function FractionCalculator() {
  const [numerator1, setNumerator1] = useState("3");
  const [denominator1, setDenominator1] = useState("5");
  const [numerator2, setNumerator2] = useState("7");
  const [denominator2, setDenominator2] = useState("9");
  const [resultNumerator, setResultNumerator] = useState("");
  const [resultDenominator, setResultDenominator] = useState("");
  const [operator, setOperator] = useState("+"); // Default to addition

  const calculate = () => {
    // Parse input values as integers
    const num1 = parseInt(numerator1, 10);
    const den1 = parseInt(denominator1, 10);
    const num2 = parseInt(numerator2, 10);
    const den2 = parseInt(denominator2, 10);

    let newNumerator, newDenominator;
    if (operator === "+") {
      // Addition
      newNumerator = num1 * den2 + num2 * den1;
      newDenominator = den1 * den2;
    } else if (operator === "-") {
      // Subtraction
      newNumerator = num1 * den2 - num2 * den1;
      newDenominator = den1 * den2;
    } else if (operator === "*") {
      // Multiplication
      newNumerator = num1 * num2;
      newDenominator = den1 * den2;
    } else if (operator === "/") {
      // Division
      newNumerator = num1 * den2;
      newDenominator = num2 * den1;
    }

    // Calculate the greatest common divisor (GCD) to simplify the result
    const gcdResult = gcd(newNumerator, newDenominator);

    // Simplify the result by dividing both numerator and denominator by GCD
    setResultNumerator(newNumerator / gcdResult);
    setResultDenominator(newDenominator / gcdResult);
  };

  // Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return (
    <>
      <section id="calculator-spaces">
        <h2> Fraction Calculator </h2>
        <p>
          At Calculator Spaces, we understand the importance of precision and
          efficiency when it comes to mathematical calculations involving
          fractions. Our fraction calculators are designed to simplify complex
          fraction operations, making math tasks more manageable and fun to work
          out for students, professionals, and anyone in need of accurate
          results.
        </p>
      </section>

      <div className="fraction-calculator">
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12} justifyContent="center" alignItems="center"></Grid>
          <Grid item xs={3}>
            <TextField
              type="number"
              label="Numerator 1"
              value={numerator1}
              onChange={(e) => setNumerator1(e.target.value)}
              variant="filled"
              fullWidth
              sx={{ marginBottom: "20px" }}
              class="responsive-textfield"
            />
            <span className="fraction-line" />
            <TextField
              type="number"
              value={denominator1}
              onChange={(e) => setDenominator1(e.target.value)}
              variant="filled"
              fullWidth
              sx={{ marginTop: "8px" }}
              class="responsive-textfield"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" fullWidth>
              <Select
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                class="responsive-textfield"
              >
                <MenuItem value="+">+</MenuItem>
                <MenuItem value="-">-</MenuItem>
                <MenuItem value="*">*</MenuItem>
                <MenuItem value="/">/</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="number"
              value={numerator2}
              onChange={(e) => setNumerator2(e.target.value)}
              variant="filled"
              fullWidth
              sx={{ marginBottom: "10px" }}
              class="responsive-textfield"
            />
            <span className="fraction-line" />
            <TextField
              type="number"
              value={denominator2}
              onChange={(e) => setDenominator2(e.target.value)}
              variant="filled"
              fullWidth
              sx={{ marginTop: "8px" }}
              class="responsive-textfield"
            />
          </Grid>

          <Grid item xs={8} sx={{ marginTop: "2em" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#333652", color: "#fff" }} // Change color here
              className="calculate-button"
              onClick={calculate}
              fullWidth
            >
              Calculate
            </Button>
          </Grid>

          <Grid item xs={8}>
            <div className="result">
              <TextField
                variant="filled"
                label="Result"
                value={`${numerator1}/${denominator1} ${operator} ${numerator2}/${denominator2} = ${resultNumerator !== "" && `${resultNumerator}/${resultDenominator}`}`}
                fullWidth
                InputProps={{
                  readOnly: true, // To make the TextField read-only
                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      <section id="key-features">
        <h2>Key Features:</h2>
        <ol>
          <li>
            <h3>Fraction: Addition and Subtraction:</h3>
            <p>
              Easily add or subtract fractions with our intuitive calculator.
              Whether you're working on school assignments, home projects, or
              professional tasks, our tool ensures accurate results every time.
            </p>
            <p>For example:</p>
            <ul>
              <li>In Addition: 25 + 14 = 1320</li>
              <li>In Subtraction: 35 - 12 = 110</li>
            </ul>
          </li>
          <li>
            <h3>Fraction: Multiplication and Division:</h3>
            <p>
              Streamline your multiplication and division of fractions using our
              specialized calculator. Save time and avoid errors with our
              user-friendly interface.
            </p>
            <p>For example:</p>
            <ul>
              <li>In Multiplication: 13 * 45 = 415</li>
              <li>In Division: 35 ÷ 13 = 95</li>
            </ul>
          </li>
        </ol>
      </section>
      <FractionSimplifyCalculator />
      <section id="how-to-use">
        <h2>How to Use:</h2>
        <p>
          Using our fraction calculators is straightforward. Enter the
          numerators and denominators, select the operation, click calculate and
          the results updated at the bottom. The step-by-step solutions provided
          ensure transparency in the calculation process.
        </p>
      </section>
      <BigFractionCalculator />
      <section id="who-can-benefit">
        <h2>Who Can Benefit?</h2>
        <ul>
          <li>
            <h3>Students and Teachers:</h3>
            <p>
              Our fraction calculators are an invaluable resource for students
              and teachers tackling fractions as coursework. From basic
              operations to advanced calculations, our tools support various
              educational levels.
            </p>
          </li>
          <li>
            <h3>Professionals:</h3>
            <p>
              Professionals working in fields that require precise mathematical
              calculations, such as engineering or finance, can rely on our
              calculators for accurate results.
            </p>
          </li>
          <li>
            <h3>Home Projects:</h3>
            <p>
              Whether you're working on DIY projects, cooking, or any task
              involving measurements, our fraction calculators simplify the
              math, making your projects more efficient.
            </p>
          </li>
        </ul>
      </section>
      <DecimalToFractionCalculator />
      <section id="about-calculator-spaces">
        <h2>About Calculator Spaces:</h2>
        <p>
          At Calculator Spaces, we are committed and determined to provide tools
          that empower users to conquer the challenges of fraction calculations.
          Explore our fraction calculators and other calculators and elevate
          your mathematical experience.
        </p>
      </section>
    </>
  );
}

export default FractionCalculator;