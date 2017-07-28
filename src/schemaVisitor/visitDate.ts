import { none, some } from "fp-ts/lib/Option";
import { nameFromNotes } from "./naming";
import { isNullable } from "./predicates";
import { BasicType, VisitedType, Visitor } from "./types";

export const visitDate: Visitor = visitSchema => schema => {
  if (schema._type !== "date") {
    return none;
  }

  const basicType: BasicType = {
    kind: "basic",
    type: "date",
  };

  const type: VisitedType = {
    class: basicType,
    name: nameFromNotes(schema),
    nullable: isNullable(schema),
  };

  return some(type);
};
