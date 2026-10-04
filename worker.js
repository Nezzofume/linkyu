export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: cors,
      });
    }

    if (request.method !== "POST") {
      return Response.json(
        { success: false, error: "POST only" },
        { status: 405, headers: cors }
      );
    }

    try {
      const input = await request.formData();

      const image = input.get("image");
      const name = input.get("name");

      if (!image) {
        return Response.json(
          { success: false, error: "Image tidak ditemukan" },
          { status: 400, headers: cors }
        );
      }

      const form = new FormData();
      form.append("image", image);

      if (name) {
        form.append("name", name);
      }

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${encodeURIComponent(env.IMGBB_API_KEY)}`,
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.json();

      return Response.json(data, {
        status: response.status,
        headers: cors,
      });

    } catch (error) {
      return Response.json(
        {
          success: false,
          error: error.message || "Upload gagal",
        },
        {
          status: 500,
          headers: cors,
        }
      );
    }
  },
};
