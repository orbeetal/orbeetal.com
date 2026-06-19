export async function POST(request) {
  try {
    const formData = await request.formData();

    const laravelUrl = `${process.env.BACKEND_API_URL}/api/cv-submit`;

    const response = await fetch(laravelUrl, {
      method: "POST",
      headers: {
        "X-Submit-Secret": process.env.ORBEETAL_SITE_SECRET,
        Accept: "application/json",
      },
      body: formData,
    });

    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch {
    return Response.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
