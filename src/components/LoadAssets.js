import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

const usePromiseAll = (promises, cb) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

const useLoadAssets = (assets, fonts) => {
  const [ready, setReady] = useState(false);
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true)
  );
  return ready;
};

export default ({ assets, fonts, children }) => {
  const ready = useLoadAssets(assets || [], fonts || {});
  if (!ready) {
    return <AppLoading />;
  }
  return <>{children}</>;
};
