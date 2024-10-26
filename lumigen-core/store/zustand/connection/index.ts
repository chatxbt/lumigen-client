import { ConnectionStore } from "@lumigen-core/interfaces/connection/index.spec";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from 'zustand/middleware'


const storageName = 'connection-storage'

export const useConnectionStore = create<ConnectionStore | any>()(
  devtools(
    persist(
      (set: any) => ({
        connected: false,
        token: null,
        twitterAuth: null,
        twitterAuth2: null,
        userInfo: null,
        _hasHydrated: false,
        setTwitterAuth: (twitterAuth: any) => {
          set({ twitterAuth })
        },
        setTwitterAuth2: (twitterAuth2: any) => {
          set({ twitterAuth2 })
        },
        connect: (userInfo: any, token: string) => {
          set({ userInfo, token, connected: true })
        },
        disconnect: () => {
          set({ token: "", twitterAuth: null, twitterAuth2: null,  connected: false });
          // window.localStorage.removeItem(storageName);
        },
        setHasHydrated: (state: any) => {
          set({
            _hasHydrated: state,
          });
        },
      }),
      {
        name: storageName,
        storage: createJSONStorage(() => localStorage),
        partialize: (state: any) => ({
          _hasHydrated: state._hasHydrated,
          token: state.token,
          twitterAuth: state.twitterAuth,
          twitterAuth2: state.twitterAuth2,
          userInfo: state.userInfo,
          connected: state.connected
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    )
  )
)
