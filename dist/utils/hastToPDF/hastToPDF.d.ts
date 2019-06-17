/**
 * Crude hast (HTML AST) to React-PDF format JSX transform
 */
import React from 'react';
import { Node } from 'hast-format';
declare function hastToPDF(node: Node): React.ReactNode;
export default hastToPDF;
