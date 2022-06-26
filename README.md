# mob1
## Install dependencies
```sh
expo install --dev
```

## Run project
Before starting expo, create a **config.ts** file from **config.example.ts**.

Finally, start expo
```sh
expo start
```

## Bundling
Before creating both executable files for IOS and Android, create an [expo account](https://expo.dev/).

Then type the following command:
```sh
expo login
```

We use [expo's eas-cli](https://expo.dev/eas) to bundle the project.

```sh
npm install -g eas-cli
```

### Android
```sh
eas build --profile production --platform android
```

### IOS
```sh
eas build -p ios
```

I have tried to install the generated **ipa** file but without success. I failed to install the root certificate on my IOS as well as to resign the certificate.

I have also tried to build the **ipa** file from a MacOS, but again, without success.

```sh
npm install -g turtle-cli
brew install fastlane
```

```sh
turtle build:ios --team-id <TEAM_ID> --dist-p12-path <P12_CERT_PATH> --provisioning-profile-path-path <PROVISIONING_PROFILE_PATH> 
```

#### Useful links
- [App credentials explained
](https://docs.expo.dev/app-signing/app-credentials/)
- [Building Standalone Apps](https://docs.expo.dev/classic/building-standalone-apps)
- [Building Standalone Apps on Your CI](https://docs.expo.dev/classic/turtle-cli/)
- [Cross-platform tool for signing IOS applications](https://github.com/zhlynn/zsign)