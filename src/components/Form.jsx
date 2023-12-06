/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInsertData } from '../services/useInsertData';
import Button from './Button';

function Form() {
  const [submit, setSubmit] = useState(false);
  const bloodTypes = ['O-', 'O+', 'B-', 'B+', 'A-', 'A+', 'AB-', 'AB+'];

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const { insertData, isInserting } = useInsertData();

  function newDonation() {
    reset();
    setSubmit(false);
  }

  function onSubmit(data) {
    setSubmit(true);
    insertData(data);
  }

  if (isInserting) return <span>Updating database...</span>;

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-center text-xl">Donation Form</h2>
      <div className="w-[600px] rounded-xl bg-white p-8 shadow-lg">
        <form
          className="flex flex-col justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            value="Transaction ID, computer-generated"
            id="transacId"
            disabled={true}
          />
          <input value="Date, computer-generated" id="dateId" disabled={true} />
          <div className="flex items-center justify-evenly">
            <label
              htmlFor="bloodType"
              className="w-[450px] rounded-lg px-2 py-1 shadow-md"
            >
              Blood Type
            </label>
            <select
              id="bloodType"
              {...register('bloodType')}
              className="ml-2 rounded-lg px-2 py-1 shadow-md"
            >
              {bloodTypes.map((bloodType, i) => (
                <option value={bloodType} key={i}>
                  {bloodType}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-evenly">
            <label
              htmlFor="donateAnonymous"
              className="w-[450px] rounded-lg px-2 py-1 shadow-md"
            >
              Donate anonymously?
            </label>
            <select
              className="ml-2 rounded-lg px-2 py-1 shadow-md"
              id="donatedAnon"
              {...register('donatedAnon')}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            {!submit && <Button>Submit</Button>}
          </div>
        </form>
        {submit && (
          <div className="flex flex-col">
            <p>Data submitted</p>
            <ul className="text-xs">
              <li>Blood Type: {getValues().bloodType}</li>
              <li>Donated Anonymously: {getValues().donatedAnon}</li>
            </ul>
            <div className="space-x-2 text-end">
              <Button
                handler={newDonation}
                className="rounded-lg bg-green-500 px-4 py-1 text-sm text-white transition-transform duration-100 hover:scale-105"
              >
                Donate again
              </Button>
              <Button to="data">Check data</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
