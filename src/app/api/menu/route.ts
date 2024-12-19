import { NextResponse } from "next/server";

import { getMenuData } from "@/services/blog/menu";

export async function GET() {
  const data = await getMenuData();

  return NextResponse.json(data.menu);
}
