"use server";

export default async function Ex() {
  try {
    const res = await fetch("https://api.github.com/users/defunkt");
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}