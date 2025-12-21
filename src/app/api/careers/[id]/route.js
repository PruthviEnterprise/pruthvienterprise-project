export async function DELETE (req, { params }) {
  try {
    const { id } = params

    const externalResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/career/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const externalResult = await externalResponse.json()

    if (!externalResponse.ok) {
      return new Response(
        JSON.stringify({
          error: externalResult?.error || 'External API error'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data: externalResult }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
