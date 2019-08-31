import React from 'react';
import { QRCode } from "react-qr-svg";
export default function qrGen() {
    return(
      <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="M"
                style={{ width: 256 }}
                value="All hope abandon, ye who enter here."
            />
    );
};