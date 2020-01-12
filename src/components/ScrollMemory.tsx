import { useEffect } from "react"
import { useCurrentRoute, useNavigation } from "react-navi"

function useScrollMemory() {
  const history = useNavigation()._history
  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo(0, 0)
    }
  }, [useCurrentRoute().url.pathname])
}

export default function ScrollMemory() {
  useScrollMemory()
  return null
}
