import { useState } from 'react';
import { useAllData } from '../services/useAllData';
import { useDeleteData } from '../services/useDeleteData';
import { useUpdateData } from '../services/useUpdateData';
import Button from './Button';

function Data() {
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState('');
  const [newBlood, setNewBlood] = useState('');
  const [newDecision, setNewDecision] = useState('');
  const { data, isLoading } = useAllData();
  const { deleteTable, isDeleting } = useDeleteData();
  const { updateData, isUpdating } = useUpdateData();

  function handleDeleteTable(id) {
    deleteTable(id);
  }

  function handleUpdateTable() {
    const updatedTable = {
      id: editId,
      bloodType: newBlood,
      donatedAnon: newDecision,
    };

    updateData(updatedTable);
  }

  if (isUpdating) return <p>Updating a table...</p>;
  if (isDeleting) return <p>Deleting a table...</p>;
  if (isLoading) return <p>Loading data...</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      {openEdit && (
        <div className="srounded-lg flex w-[300px] flex-col p-4 shadow-lg">
          <p className="mb-4">Update table #{editId}</p>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateTable();
            }}
          >
            <label htmlFor="bloodType">New Blood Type</label>
            <input
              id="bloodType"
              value={newBlood}
              onChange={(e) => setNewBlood(e.target.value)}
            />
            <label htmlFor="donatedAnon">New Decision</label>
            <input
              id="donatedAnon"
              value={newDecision}
              onChange={(e) => setNewDecision(e.target.value)}
            />
            <div className="mt-4">
              <Button type="submit">Confirm</Button>
            </div>
          </form>
        </div>
      )}

      {data.map((donation) => {
        return (
          <div className="grid grid-cols-5" key={donation.id}>
            <div className=" space-y-2 bg-blue-300 p-2">
              <h2>Transaction ID</h2>
              <ul className="border">
                <li className="border">{donation.id}</li>
              </ul>
            </div>
            <div className=" space-y-2 bg-orange-300 p-2 ">
              <h2>Transaction Date</h2>
              <ul className="border">
                <li className="border">
                  {donation.createdAt.toString().slice(0, 10)}
                </li>
              </ul>
            </div>
            <div className=" space-y-2 bg-violet-300 p-2 ">
              <h2>Blood Type Donated</h2>
              <ul className="border">
                <li className="border">{donation.bloodType}</li>
              </ul>
            </div>
            <div className=" space-y-2 bg-red-300 p-2 ">
              <h2>Anonymously (Y/N)</h2>
              <ul className="border">
                <li className="border">{donation.donatedAnon}</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center space-y-1 bg-slate-300 p-2 ">
              <h2>Edit / Delete</h2>

              <div className="flex gap-4" key={donation.id}>
                <button
                  className="bg-blue-300 px-2"
                  onClick={() => {
                    setEditId(donation.id);
                    setOpenEdit((prev) => !prev);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-300 px-2"
                  onClick={() => handleDeleteTable(donation.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
