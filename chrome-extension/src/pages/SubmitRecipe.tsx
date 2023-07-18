import { FormEvent, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../components/reusable/Input";
import { authenticities, difficulties, origins } from "../utils/consts";
import useRecipe from "../customHooks/useRecipe";
import { capitalize } from "../utils/utils";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function SubmitRecipe() {
  const [open, setOpen] = useState(true);
  const [errorField, setErrorField] = useState<{ field: string; msg: string }>({
    field: "",
    msg: "",
  });

  const { submitRecipe } = useRecipe();

  const defaultRecipe = {
    name: "",
    origin: origins[0].code,
    description: "",
    difficulty: 0,
    protein: "",
    produce: "",
    spice: "",
    cookingOil: "",
    volume: 0,
    serves: 0,
    authenticity: authenticities[0].value,
    stock: "",
  };

  const [recipe, setRecipe] = useState(defaultRecipe);

  const {
    name,
    origin,
    description,
    difficulty,
    protein,
    produce,
    spice,
    cookingOil,
    volume,
    serves,
    authenticity,
    stock,
  } = recipe;

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await submitRecipe(recipe);

    if (res?.message) {
      setRecipe(defaultRecipe);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
      setErrorField({ field: "", msg: "" });
    } else if (res?.detail) {
      setErrorField({
        field: res.detail[0].loc[1],
        msg: res.detail[0].msg,
      });
    }
  };

  return (
    <div className="relative">
      <Link to="/">
        <p className="text-white font-bold">
          <span className="text-[#6B7280] mr-3">&#x276E;</span>
          Add new recipe
        </p>
      </Link>
      <hr className="text-[#2E3347] my-3" />
      <form onSubmit={onSubmit} className="my-2">
        <div className="flex justify-between items-center gap-3">
          <Input
            label={"Name*"}
            value={name}
            onChange={onChange}
            name={"name"}
          />
          <Input
            label={"Origin*"}
            type="select"
            value={origin}
            onChange={onChange}
            options={origins}
            keys={{
              text: "name",
              value: "code",
            }}
            name={"origin"}
          />
        </div>
        <div className="mt-3">
          <Input
            label={"Description*"}
            value={description}
            onChange={onChange}
            type="textarea"
            placeholder="Describe your recipe..."
            name={"description"}
          />
        </div>
        <div className="mt-2 flex justify-between items-center gap-3">
          <Input
            label={"Difficulty*"}
            type="select"
            value={difficulty}
            onChange={onChange}
            options={difficulties}
            keys={{
              text: "name",
              value: "value",
            }}
            name={"difficulty"}
          />
          <Input
            label={"Protein*"}
            value={protein}
            onChange={onChange}
            name={"protein"}
          />
        </div>
        <div className="mt-3 flex justify-between items-center gap-3">
          <Input
            label={"Produce*"}
            value={produce}
            onChange={onChange}
            name={"produce"}
          />
          <Input
            label={"Spice*"}
            value={spice}
            onChange={onChange}
            name={"spice"}
          />
        </div>
        <div className="mt-3 flex justify-between items-center gap-3">
          <Input
            label={"Cooking Oil*"}
            value={cookingOil}
            onChange={onChange}
            required={false}
            name={"cookingOil"}
          />
          <Input
            label={"Volume*"}
            type="number"
            value={volume}
            onChange={onChange}
            unit="gram"
            name={"volume"}
          />
        </div>
        <div className="mt-3 flex justify-between items-center gap-3">
          <Input
            label={"Serves*"}
            type="number"
            value={serves}
            onChange={onChange}
            unit="people"
            name={"serves"}
          />
          <Input
            label={"Authenticity*"}
            type="select"
            value={authenticity}
            onChange={onChange}
            options={authenticities}
            keys={{
              text: "value",
              value: "value",
            }}
            name={"authenticity"}
          />
        </div>
        <div className="mt-3 flex justify-between items-center gap-3">
          <Input
            label={"Stock*"}
            value={stock}
            onChange={onChange}
            name={"stock"}
          />
        </div>
        {errorField.msg && (
          <p className="text-[#DB282B] text-sm mt-1 normal-case">
            "{capitalize(errorField.field)}": {capitalize(errorField.msg)}
          </p>
        )}
        {open ? (
          <input
            type="submit"
            className="bg-[#764AF4] text-white w-full mt-6 rounded-md py-2 cursor-pointer"
            value={"Add Recipe"}
          />
        ) : (
          <div className="relative">
            <input
              type="submit"
              disabled
              className="bg-success text-white w-full mt-6 rounded-md py-2 "
              value={"Submitted"}
            />
            <CheckIcon className="text-white absolute right-28 top-[32px] h-5 w-5 " />
          </div>
        )}
      </form>
    </div>
  );
}
