/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from "next"

import config from "@/payload-config"
import { RootPage, generatePageMetadata } from "@payloadcms/next/views"

import { importMap } from "../importMap.js"

type Args = {
  params: {
    segments: string[]
  }
  searchParams: {
    [key: string]: string | string[]
  }
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({
    config: Promise.resolve(config),
    params: Promise.resolve(params),
    searchParams: Promise.resolve(searchParams)
  })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params: Promise.resolve(params), searchParams: Promise.resolve(searchParams), importMap })

export default Page
