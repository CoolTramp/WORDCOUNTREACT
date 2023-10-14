const URL_CONTRACTION = "http://192.168.43.185:3002/contraction";

export async function getCountedWord(
  textAreaValue: string,
  setCountedWord: any
) {
  try {
    const response = await fetch(URL_CONTRACTION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: textAreaValue }),
    });

    if (!response.ok) {
      throw new Error(+response.status + " " + response.statusText);
    }
    //answer.data contains object with counted words
    const answer = await response.json();
    setCountedWord(answer.data);
    return answer;
  } catch (err) {
    console.error(err);
  }
}
