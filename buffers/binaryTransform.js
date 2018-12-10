function binaryTransform(buffer) {
    let header = {};
    let date = new Date();
    date.setFullYear(1900 + buffer[1]);
    date.setMonth(buffer[2]);
    date.setDate(buffer[3]);
    header.lastUpdated = date.toString();
    header.totalRecords = buffer.readUInt32LE(4);
    header.bytesInHeader = buffer.readUInt16LE(8);
    header.bytesPerRecord = buffer.readUInt16LE(10);

    let fields = {},
        fieldOffset = 32,
        fieldTerminator = 0x0D;
    let FIELD_TYPES = {
        "C": "Character",
        "N": "Numberic"
    };
    while (buffer[fieldOffset] !== fieldTerminator) {
        let fieldBuf = buffer.slice(fieldOffset, fieldOffset + 32);
        let field = {};
        field.name = fieldBuf.toString("ascii", 0, 11).replace(/\u0000/g, "");
        field.type = FIELD_TYPES[fieldBuf.toString("ascii", 11, 12)];
        field.length = fieldBuf[16];
        fields.push(field);
        fieldOffset += 32;
    }

    let startingRecordOffset = header.bytesInHeader,
        records = {};
    for (let i = 0; i < header.totalRecords; i++) {
        let recordOffset = startingRecordOffset + (i * header.bytesPerRecord);
        let record = {};

        record._isDel = buffer.readUInt8(startingRecordOffset) === 0x2A;
        recordOffset++;

        for (let j = 0; j < fields.length; j++) {
            let field = fields[j];
            let type = field.type === "Numbemic" ? Number : String;
            record[field.name] = type(buffer.toString("utf8", recordOffset, recordOffset + field.length).trim());
            recordOffset += field.length;
        }
        records.push(record);
    }
    return {header: header, fields: fields, records: records};
}

module.exports = binaryTransform;