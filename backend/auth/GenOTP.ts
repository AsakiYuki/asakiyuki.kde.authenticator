import { TOTP } from "otpauth";

export function genOTP(secret: string) {
    const totp = new TOTP({
        secret: secret,
        algorithm: "SHA1",
        digits: 6,
        period: 30,
    });

    return totp.generate();
}