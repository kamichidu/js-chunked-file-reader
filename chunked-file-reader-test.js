describe('initialization', function(){
    it('initialize correctly', function(){
        var reader= new ChunkedFileReader();

        expect(reader).toBeDefined();
        expect(reader.maxChunkSize).toBe(256 * 1024);
        expect(typeof reader.readChunks).toBe('function');
        expect(typeof reader.publish).toBe('function');
        expect(typeof reader.subscribe).toBe('function');
    });
});
