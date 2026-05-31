/**
 * Generate a single TTS audio track returned as Base64 string.
 */
export declare function synthesizeTTS(text: string, voiceKey?: string): Promise<{
    base64: string;
    mimeType: string;
}>;
//# sourceMappingURL=text-to-speech.d.ts.map