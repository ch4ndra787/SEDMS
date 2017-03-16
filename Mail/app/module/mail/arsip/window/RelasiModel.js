Ext.define('Docs.view.arsip.window.RelasiModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.arsip-window-relasi',
    stores:{
    	daftarsurat:{
    		sorters: {property: 'created_by', direction: 'DESC'},
        	groupField: 'relationcode',
    		fields: [ 		
                {name: 'id', type:'auto'},
                {name: 'verified', type:'auto'},
                {name: 'relationcode', type:'auto'},
                {name: 'verified_by', type:'auto'},
                {name: 'verified_on', type:'date'},
                {name: 'verification_request_id_jab', type:'auto'},
                {name: 'tipe_surat', type:'auto'},
                {name: 'tahun', type:'auto'},
                {name: 'no_registrasi', type:'auto'},
                {name: 'indeks', type:'auto'},
                {name: 'no_urut', type:'auto'},
                {name: 'id_klasifikasi', type:'auto'},
                {name: 'ringkasan', type:'auto'},
                {name: 'tgl_surat', type:'date'},
                {name: 'tgl_terima', type:'date'},
                {name: 'nomor_surat', type:'auto'},
                {name: 'perihal', type:'auto'},
                {name: 'no_urut', type:'auto'},
                {name: 'catatan', type:'auto'},
                {name: 'dibaca', type:'auto'},                
                {name: 'klasifikasi', type:'auto'},
                {name: 'kode_klasifikasi', type:'auto'},
                {name:'full_klasifikasi',type:'auto',
                    convert: function (value, record) {
                         return record.data.kode_klasifikasi+':'+record.data.klasifikasi;
                     }
                }

            ],
            autoLoad:true,
            pageSize:10,
            proxy: {
                type: 'rest',
                extraParams:{
	            	type:'related_search',
	            	relationcode : '{relationcode}'
	            },
                timeout: 20000000,
                api: {
                        create  : serverURL+'surat/daftar',
                        update  : serverURL+'surat/daftar',
                        destroy : serverURL+'surat/daftar'
                },        
                url: serverURL+'surat/daftar.json',
                reader: {
                      type: 'json',
                      rootProperty: 'data',
                      totalProperty: 'total'
                },
                writer: {
                      //encode: true,
                      type: 'json',
                      rootProperty: 'data'
                }
             }
    	},
    	daftarrelasi:{
    		sorters: {property: 'created_by', direction: 'DESC'},
        	groupField: 'relationcode',
    		fields: [ 		
                {name: 'id', type:'auto'},
                {name: 'verified', type:'auto'},
                {name: 'relationcode', type:'auto'},
                {name: 'verified_by', type:'auto'},
                {name: 'verified_on', type:'date'},
                {name: 'verification_request_id_jab', type:'auto'},
                {name: 'tipe_surat', type:'auto'},
                {name: 'tahun', type:'auto'},
                {name: 'no_registrasi', type:'auto'},
                {name: 'indeks', type:'auto'},
                {name: 'no_urut', type:'auto'},
                {name: 'id_klasifikasi', type:'auto'},
                {name: 'ringkasan', type:'auto'},
                {name: 'tgl_surat', type:'date'},
                {name: 'tgl_terima', type:'date'},
                {name: 'nomor_surat', type:'auto'},
                {name: 'perihal', type:'auto'},
                {name: 'no_urut', type:'auto'},
                {name: 'catatan', type:'auto'},
                {name: 'dibaca', type:'auto'},                
                {name: 'klasifikasi', type:'auto'},
                {name: 'kode_klasifikasi', type:'auto'},
                {name:'full_klasifikasi',type:'auto',
                    convert: function (value, record) {
                         return record.data.kode_klasifikasi+':'+record.data.klasifikasi;
                     }
                }

            ],
            autoLoad:true,
            pageSize:10,
            proxy: {
                type: 'rest',
                extraParams:{
	            	type:'related_list',
	            	relationcode : '{relationcode}'
	            },
                timeout: 20000000,
                api: {
                        create  : serverURL+'surat/daftar',
                        update  : serverURL+'surat/daftar',
                        destroy : serverURL+'surat/daftar'
                },        
                url: serverURL+'surat/daftar.json',
                reader: {
                      type: 'json',
                      rootProperty: 'data',
                      totalProperty: 'total'
                },
                writer: {
                      //encode: true,
                      type: 'json',
                      rootProperty: 'data'
                }
             }
    	}
    }

});
