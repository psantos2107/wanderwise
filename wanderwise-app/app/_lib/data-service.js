import { supabase } from "./supabase";

//Code for fetching data will be displayed below.
export async function testConnection() {
  try {
    const { data, error } = await supabase.from("test").select("*").limit(1);
    if (error) {
      console.error(
        "Connection test FAILED. Here is the message: ",
        error.message
      );
    } else {
      console.log(`${data}!! Your connection to supabase was successful.`);
    }
  } catch (err) {
    console.error(
      "This connection failed. Please refer to error above and please try again."
    );
  }
}
