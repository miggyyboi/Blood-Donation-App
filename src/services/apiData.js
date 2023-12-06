import supabase from './supabase';

export async function getDonations() {
  let { data, error } = await supabase.from('donation').select();

  if (error) {
    console.error(error);
    throw new Error('Data could not be loadded');
  }

  return data;
}

export async function deleteData(id) {
  const { error } = await supabase.from('donation').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error(`Data table with id ${id} could not be deleted`);
  }
}

export async function insertData(table) {
  // console.log(table);
  const { data, error } = await supabase
    .from('donation')
    .insert([{ ...table }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Data table could not be inserted');
  }

  return data;
}

export async function updateData(table) {
  const { data, error } = await supabase
    .from('donation')
    .update([{ ...table }])
    .eq('id', table.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Data table could not be updated');
  }

  return data;
}
