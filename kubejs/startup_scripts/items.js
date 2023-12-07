onEvent('item.registry', event => {
    event.create('raw_aluminum').maxStackSize(64);
    
    event.create('zinc_grit').maxStackSize(64);
    event.create('bio_fuel').maxStackSize(64);
    event.create('bioslag').maxStackSize(64);
    event.create('cured_latex').maxStackSize(64);
    event.create('creosote_sheet').maxStackSize(64);

    event.create('shadow_sheet').maxStackSize(64);
    event.create('unprocessed_shadow_sheet', 'create:sequenced_assembly').maxStackSize(1);

    event.create('radiant_sheet').maxStackSize(64);
    event.create('unprocessed_radiant_sheet', 'create:sequenced_assembly').maxStackSize(1);

    event.create('bioplast_sheet').maxStackSize(64);    
    event.create('epoxyplast_sheet').maxStackSize(64);
    
    event.create('aluminum_mechanical_component').maxStackSize(64);    

    event.create('basic_electronic_component').maxStackSize(64);

    event.create('light_mechanism').maxStackSize(64);
    event.create('incomplete_light_mechanism', 'create:sequenced_assembly').maxStackSize(1);

    event.create('heavy_mechanism').maxStackSize(64);
    event.create('incomplete_heavy_mechanism', 'create:sequenced_assembly').maxStackSize(1);

    event.create('ponderous_mechanism').maxStackSize(64);
    event.create('incomplete_ponderous_mechanism', 'create:sequenced_assembly').maxStackSize(1);
})