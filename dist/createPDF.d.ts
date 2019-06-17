/// <reference types="node" />
/**
 * Helper method to be ran in node environment to create the pdf
 * @param filePath output file path for resume pdf
 */
declare const createPDF: (filePath: string) => Promise<NodeJS.ReadableStream>;
export default createPDF;
