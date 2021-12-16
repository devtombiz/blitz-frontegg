import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import { FronteggProvider } from "@frontegg/nextjs"

const contextOptions = {
  baseUrl: "https://app-bexr3f2ynvy0.frontegg.com",
}

const authOptions = {
  routes: {
    authenticatedUrl: "http://localhost:3000",
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <FronteggProvider contextOptions={contextOptions} authOptions={authOptions}>
      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        onReset={useQueryErrorResetBoundary().reset}
      >
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </FronteggProvider>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
