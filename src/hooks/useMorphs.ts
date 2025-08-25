import React from "react";
import { useMorphGroup } from "./useMorphGroup";

const get = <T extends Record<string, any>>(obj: T, path: readonly string[]) =>
  path.reduce<any>((o, k) => (o ? o[k] : undefined), obj) as {
    from: string;
    to: string;
  };

type Path = readonly string[];

const useMorphs = (toAnimate: any) => {
  const register = useMorphGroup({ holdMs: 0 });

  const regAt = (path: Path) => {
    const pair = get(toAnimate, path);
    return register(pair.from, pair.to);
  };

  const regMany = <K extends string>(sectionPath: Path, keys: readonly K[]) =>
    keys.map((k) => regAt([...sectionPath, k]));

  return React.useMemo(() => {
    const [dLarge, dSmall, bulb] = [["jugLarge"], ["jugSmall"], ["bulb"]].map(
      (p) => regAt(p as Path)
    );

    const bagKeys = ["square", "two", "three", "four", "five", "six"] as const;
    const [
      shoppingBagContainerSquare,
      shoppingBagContainer2,
      shoppingBagContainer3,
      shoppingBagContainer4,
      shoppingBagContainer5,
      shoppingBagContainer6,
    ] = regMany(["shoppingBagContainer"], bagKeys);

    // grouped: right boxes
    const rightBoxKeys = [
      "sq",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
    ] as const;
    const [
      rightBox1,
      rightBox2,
      rightBox3,
      rightBox4,
      rightBox5,
      rightBox6,
      rightBox7,
      rightBox8,
    ] = regMany(["rightBox"], rightBoxKeys);

    return {
      dLarge,
      dSmall,
      bulb,
      shoppingBagContainerSquare,
      shoppingBagContainer2,
      shoppingBagContainer3,
      shoppingBagContainer4,
      shoppingBagContainer5,
      shoppingBagContainer6,
      rightBox1,
      rightBox2,
      rightBox3,
      rightBox4,
      rightBox5,
      rightBox6,
      rightBox7,
      rightBox8,
    };
  }, [register, toAnimate]);
};

export default useMorphs;
